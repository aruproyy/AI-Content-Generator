"use client";
import { Button } from "@/components/ui/button";
import { aiOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

function UsageTrack() {
  const { user } = useUser();
  const router = useRouter(); // Use the router hook for redirection

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    if (user) getData(); // Ensure user exists before fetching data
  }, [user]);

  useEffect(() => {
    if (user && updateCreditUsage) {
      getData();
    }
  }, [updateCreditUsage, user]); // Correctly setting dependencies

  const getData = async () => {
    if (!user) return; // Ensure we don't fetch data if user is not available
    try {
      const result: HISTORY[] = await db
        .select()
        .from(aiOutput)
        .where(eq(aiOutput.createdBy, user.primaryEmailAddress?.emailAddress || ''));

      getTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total = result.reduce((sum, element) => sum + Number(element.aiResponse?.length || 0), 0);
    setTotalUsage(total);
    console.log(total);
  };

  const progressPercentage = totalUsage ? (totalUsage / 10000) * 100 : 0;

  const handleUpgrade = () => {
    // Redirect to the billing page
    router.push("/dashboard/billing");
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2>Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${Math.min(progressPercentage, 100)}%`, // Avoid overflow beyond 100%
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credits used</h2>
      </div>
      <Button
        variant="secondary"
        className="w-full my-3 text-primary font-bold"
        onClick={handleUpgrade} // Call handleUpgrade when clicked
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
