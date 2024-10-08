import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { aiOutput } from "@/utils/schema";

interface props {
  AIOutput: any;
}

function OutputSection({ AIOutput }: props) {
  const editorRef: any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(AIOutput);
  }, [AIOutput]);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-gray-600 font-medium text-lg">Your Result</h2>
        <Button
          className="flex gap-2"
          onClick={() => navigator.clipboard.writeText(AIOutput)}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
