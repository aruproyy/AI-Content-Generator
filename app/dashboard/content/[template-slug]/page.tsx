"use client"
import React, { useContext, useState } from 'react'
import FromSection from '../_components/FromSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { aiOutput } from '@/utils/schema'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS {
    params: {
        "template-slug": string
    }
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);
    const [loading, setLoading] = useState(false);
    const [AIOutput, setAIOutput] = useState<string | undefined>(undefined);
    const {user}=useUser();
    const router = useRouter();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {updateCreditUsage, setupdateCreditUsage}=useContext(UpdateCreditUsageContext);
    /**
     * Used to generate content from AI
     * @param formData
     * @returns
     */
    const generateAIContent = async (formData: any) => {
        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
        const result = await chatSession.sendMessage(finalAIPrompt);
        // console.log(result.response.text());
        setAIOutput(result.response.text());
        await saveInDb(formData, selectedTemplate?.slug, result.response.text());
        setLoading(false);

        setupdateCreditUsage(Date.now());
    }
    const saveInDb = async (formData: any, slug: any, aiResp: string) => {

        if(totalUsage >= 10000){
            console.log("please Upgrade");
            router.push("/dashboard/billing");
            return;
        }

        const result = await db.insert(aiOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format("DD/MM/YYYY"),
        });
        console.log(result);
    }
    return (
        <div className="p-10">
            <Link href={"/dashboard"}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                <FromSection selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => generateAIContent(v)}
                    loading={loading} />
                <div className="col-span-2">
                    <OutputSection AIOutput={AIOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent