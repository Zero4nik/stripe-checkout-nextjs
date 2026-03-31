import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-03-25.dahlia'
});

export async function POST(req: NextRequest) {
    try {
        const { priceId } = await req.json();
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'payment', 
            success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });
        
         return NextResponse.json({ 
            sessionId: session.id,
            url: session.url 
        });
        
    } catch (error) {

        console.log('ERROR MESSAGE:', error instanceof Error ? error.message : error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Unknown' },
            { status: 500 }
        );
    }
}