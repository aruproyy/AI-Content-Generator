"use client";

import React, { useEffect, useState } from 'react';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { aiOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import { TEMPLATE } from '../_components/TemplateListSection';
import { useUser } from '@clerk/nextjs';

export interface HISTORY {
  id: number;
  formData: any;
  aiResponse: any;
  templateSlug: any;
  createdBy: any;
  createdAt: any;
}

function History() {
  const { user } = useUser(); // Use the useUser hook to get the current user
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        if (!user) {
          setLoading(false);
          return;
        }

        const history: HISTORY[] = await db
          .select()
          .from(aiOutput)
          .where(eq(aiOutput.createdBy, user.primaryEmailAddress?.emailAddress || ''))
          .orderBy(desc(aiOutput.id));

        setHistoryList(history);
      } catch (error) {
        console.error('Error fetching history:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchHistory();
    }
  }, [user]);

  const getTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates.find((item) => item.slug === slug);
    return template;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h1 className="font-bold text-3xl text-black">History</h1>
      <p className="text-gray-800">Search your previous generations</p>

      <div className="grid grid-cols-7 text-black font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {historyList.length === 0 ? (
        <p className="text-black">No history available.</p>
      ) : (
        historyList.map((item) => (
          <div key={item.id} className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center text-black">
              <Image
                src={getTemplateName(item?.templateSlug)?.icon || '/default-icon.png'}
                alt={getTemplateName(item.templateSlug)?.name || 'Template'}
                width={25}
                height={25}
              />
              {getTemplateName(item.templateSlug)?.name || 'Unknown Template'}
            </h2>
            <h2 className="col-span-2 line-clamp-3 mr-10 text-black">{item.aiResponse}</h2>
            <h2 className='text-black'>{item.createdAt}</h2>
            <h2 className='text-black ml-6'>{item.aiResponse ? item.aiResponse.length : 0}</h2> {/* Fixed line */}
            <h2>
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </Button>
            </h2>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
