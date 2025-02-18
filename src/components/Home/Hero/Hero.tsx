'use client';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';

import React from 'react';

const Hero = () => {
  return (
    <section
      className="
        relative 
        w-full 
        bg-cover 
        bg-center 
        overflow-hidden
        py-16
        priority-1
      "
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0  bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        {/* White Box with Tabs */}
        <div className="bg-white rounded-md shadow-lg p-6 md:p-8">
          <Tabs defaultValue="callDoctor" className="space-y-6">
            {/* Tabs Header */}
            <TabsList className="flex justify-center space-x-4">
              {/* Call Doctor Tab Trigger */}
              <TabsTrigger
                value="callDoctor"
                className="
                  relative group 
                  px-4 py-2 
                  text-lg 
                  text-gray-700 
                  hover:text-blue-600 
                  transition-colors duration-300
                  data-[state=active]:text-blue-600
                "
              >
                Call Doctor
                {/* Underline effect */}
                <span 
                  className="
                    absolute 
                    left-0 
                    -bottom-0.5 
                    h-[2px] 
                    w-full 
                    bg-blue-600 
                    transform 
                    transition-transform 
                    duration-300 
                    origin-left 
                    scale-x-0 
                    group-hover:scale-x-100 
                    data-[state=active]:scale-x-100
                  "
                />
              </TabsTrigger>

              {/* Book Appointment Tab Trigger */}
              <TabsTrigger
                value="bookAppointment"
                className="
                  relative group 
                  px-4 py-2 
                  text-lg 
                  text-gray-700 
                  hover:text-blue-600 
                  transition-colors duration-300
                  data-[state=active]:text-blue-600
                "
              >
                Book Appointment
                {/* Underline effect */}
                <span 
                  className="
                    absolute 
                    left-0 
                    -bottom-0.5 
                    h-[2px] 
                    w-full 
                    bg-blue-600 
                    transform 
                    transition-transform 
                    duration-300 
                    origin-left 
                    scale-x-0 
                    group-hover:scale-x-100 
                    data-[state=active]:scale-x-100
                  "
                />
              </TabsTrigger>

              {/* Join Our Team Tab Trigger */}
              <TabsTrigger
                value="joinTeam"
                className="
                  relative group 
                  px-4 py-2 
                  text-lg 
                  text-gray-700 
                  hover:text-blue-600 
                  transition-colors duration-300
                  data-[state=active]:text-blue-600
                "
              >
                Join Our Team
                {/* Underline effect */}
                <span 
                  className="
                    absolute 
                    left-0 
                    -bottom-0.5 
                    h-[2px] 
                    w-full 
                    bg-blue-600 
                    transform 
                    transition-transform 
                    duration-300 
                    origin-left 
                    scale-x-0 
                    group-hover:scale-x-100 
                    data-[state=active]:scale-x-100
                  "
                />
              </TabsTrigger>
            </TabsList>

            {/* Call Doctor Tab */}
            <TabsContent value="callDoctor">
              <div className="text-center mt-6 space-y-3">
                <p className="text-gray-600 text-base md:text-lg">
                  Need immediate advice or have a quick question about your health? 
                  Our dedicated team is standing by to take your call. 
                  Simply tap the number below to connect with us right away.
                </p>
                <a
                  href="tel:610-664-6200"
                  className="text-blue-600 text-xl font-bold hover:underline"
                >
                  (610) 664-6200
                </a>
              </div>
            </TabsContent>

            {/* Book Appointment Tab */}
            <TabsContent value="bookAppointment">
              <div className="text-center mt-6 space-y-3">
                <p className="text-gray-600 text-base md:text-lg">
                  Looking for a thorough consultation or a detailed check-up? 
                  Book an appointment with our experts to get the personalized care you deserve. 
                  Just click the button below to fill out a quick form, and we’ll be in touch with available slots.
                </p>

                {/* Button that opens a Modal (Dialog) */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">Book Appointment</Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-lg p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle className="text-xl">Book an Appointment</DialogTitle>
                      <DialogDescription className="text-base text-gray-600">
                        Please fill out the form below and we will get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="appointmentName">Name</Label>
                        <Input id="appointmentName" placeholder="Your Full Name" />
                      </div>
                      <div>
                        <Label htmlFor="appointmentEmail">Email</Label>
                        <Input
                          id="appointmentEmail"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointmentPhone">Phone</Label>
                        <Input
                          id="appointmentPhone"
                          type="tel"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointmentMessage">Message</Label>
                        <Input
                          id="appointmentMessage"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <Button type="submit" className="mt-2">
                        Submit
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>

            {/* Join Our Team Tab */}
            <TabsContent value="joinTeam">
              <div className="text-center mt-6 space-y-3">
                <p className="text-gray-600 text-base md:text-lg">
                  We’re always on the lookout for passionate individuals 
                  who want to make a difference in healthcare. Whether you’re 
                  an experienced professional or just starting out, there’s a place for you here. 
                  Click below to learn more about our openings and to submit your application.
                </p>

                {/* Button that opens a Modal (Dialog) */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">Apply Now</Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-lg p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle className="text-xl">Join Our Team</DialogTitle>
                      <DialogDescription className="text-base text-gray-600">
                        Fill out the form below to apply for a position. We look forward to hearing from you!
                      </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="1234 Main St." />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone</Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position to Apply For</Label>
                        <Select>
                          <SelectTrigger id="position">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="therapist">Therapist</SelectItem>
                            <SelectItem value="assistant">Assistant</SelectItem>
                            <SelectItem value="admin">Admin Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="mt-2">
                        Submit
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
