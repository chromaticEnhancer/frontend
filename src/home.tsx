import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Dropzone } from '@/components/ui/dropzone';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
  const [image, setImage] = useState<Blob>();
  const [cimg, setCimg] = useState<Blob>();

  useEffect(() => {
    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      fetch('api/colorise', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData
      }).then(response => response.blob()) // response.blob() returns a Promise
        .then(blob => {
          setCimg(blob); // handle the Promise to get the Blob

        })

    }
  }, [image])

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-screen w-max rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-screen items-center justify-center p-6">
          {image ? <img className="max-h-screen w-auto" src={URL.createObjectURL(image)} />
            :
            <Dropzone
              onChange={setImage}
              className="w-full h-full flex justify-center"
              fileExtensions={['png', 'jpg', 'jpeg']}
            />}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-screen items-center justify-center p-6">

          {cimg && <img className="max-h-screen w-auto" src={URL.createObjectURL(cimg)} />}

        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}