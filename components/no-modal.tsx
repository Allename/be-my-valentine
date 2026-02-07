'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface NoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NoModal({ isOpen, onClose }: NoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* <h2 className="text-xl font-semibold text-primary text-center">
            What is your problem this girl?
          </h2> */}
          <div className="relative bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Placeholder for image - user can edit this later */}
            {/* <div className="text-center text-gray-400">
              <p className="text-sm">Upload or edit image here</p>
              <p className="text-xs mt-2">Replace this placeholder with your image</p>
            </div> */}
            {/* To add an image, replace the above div with: */}
            <img
              src="https://res.cloudinary.com/doi40g1ct/image/upload/v1770422418/39b9da20-18e1-41f5-a231-d01ecff53033_nmavz2.jpg"
              alt="Romantic moment"
              className="w-full h-64 object-contain object-center"
            />
          </div>
          {/* <p className="text-center text-primary/70">
            Maybe you need some more convincing? 😉
          </p> */}
          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Try Again
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
