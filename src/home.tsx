import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Dropzone } from '@/components/ui/dropzone';
import { useState } from 'react';

export default function Home() {
  const [files, setFiles] = useState<string[]>([]);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-screen w-max rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-screen items-center justify-center p-6">
          {files.length != 0 ? <img className="max-h-screen w-auto" src={files[files.length - 1]} />
            :
            <Dropzone
              onChange={setFiles}
              className="w-full h-full flex justify-center"
              fileExtensions={['png', 'jpg', 'jpeg']}
            />}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-screen items-center justify-center p-6">

          <img className="max-h-screen w-auto" src={files[files.length - 1]} />

        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
