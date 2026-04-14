import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingForm {
  fullName: string;
  phone: string;
  reelsCount: string;
  location: string;
  reelType: string;
}

export function BookingModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<BookingForm>({
    fullName: "",
    phone: "",
    reelsCount: "1",
    location: "Chennai",
    reelType: "Standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*UNITED VFX BOOKING*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Reels:* ${formData.reelsCount}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Type:* ${formData.reelType}%0A%0A` +
      `I would like to book a cinematic reel shoot!`;
    
    window.open(`https://wa.me/917207299349?text=${message}`, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">Book Your Reel</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Fill in the details below. We'll redirect you to WhatsApp to finalize your booking.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="bg-white/5 border-white/10 focus:border-brand-red transition-colors"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+91 00000 00000"
              className="bg-white/5 border-white/10 focus:border-brand-red transition-colors"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Location</Label>
              <Select 
                value={formData.location} 
                onValueChange={(v) => setFormData({ ...formData, location: v })}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Kodur">Kodur</SelectItem>
                  <SelectItem value="Tirupati">Tirupati</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Reels (1-5)</Label>
              <Select 
                value={formData.reelsCount} 
                onValueChange={(v) => setFormData({ ...formData, reelsCount: v })}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Count" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Reel Type</Label>
            <Select 
              value={formData.reelType} 
              onValueChange={(v) => setFormData({ ...formData, reelType: v })}
            >
              <SelectTrigger className="bg-white/5 border-white/10">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10 text-white">
                <SelectItem value="Basic">Basic (₹1000)</SelectItem>
                <SelectItem value="Standard">Standard (₹1500)</SelectItem>
                <SelectItem value="Premium">Premium (₹5000)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold mt-2">
            Confirm via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
