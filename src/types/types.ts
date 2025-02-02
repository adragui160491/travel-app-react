// src/types/types.ts

export interface Trip {
    id: string;
    title: string;
    description: string;
    level: string;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
  }
  
  export interface Booking {
    id: string;
    userId: string;
    tripId: string;
    guests: number;
    date: string;
    trip: {
      title: string;
      duration: number;
      price: number;
    };
    totalPrice: number;
    createdAt: string;
  }
  