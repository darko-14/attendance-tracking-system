import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { AttendanceRecord } from "@/types";
import CameraCapture from "./CameraCapture";

type FormData = {
  name: string;
  email: string;
  picture?: string;
}

type PropTypes = {
  addRecord: (record: AttendanceRecord) => void;
}

export function AttendanceForm({ addRecord }: PropTypes) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [imageData, setImageData] = useState<Float32Array | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
      setOpen(false);
      reset();
      const d: AttendanceRecord = {
        name: data.name,
        email: data.email,
        timestamp: new Date().toISOString(),
        attendanceType: 'ENTRY', // Assuming ENTRY for this example
      }
      console.log('onSubmit:', data, imageData);
      addRecord(d);
    }, 2000);
  }

  const onCapture = async (data: Float32Array<ArrayBufferLike>) => {
    setImageData(data);
    console.log('Captured image data:', imageData);

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>
        <Button variant="outline">Make a record</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle>Check in / Check out</DialogTitle>
          <DialogDescription>Make an entry or exit</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" placeholder="John Doe" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email-1">Email</Label>
            <Input id="email-1" placeholder="johndoe@gmail.com" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="picture">Picture</Label>
            <CameraCapture onCapture={onCapture} />
          </div>


          <DialogFooter>
            <Button type="submit">{loading ? 'Loading...' : 'Save'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
