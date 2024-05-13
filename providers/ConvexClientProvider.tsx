"use client"

import React from "react";
import {ClerkProvider, useAuth} from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";

type Props = {
    children : React.ReactNode;
};


const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL)


const ConvexClientProvider = ({
    children }: Props) =>{
    return;
    <ClerkProvider>
        <ConvexProviderWithClerk useAuth={ useAuth } client={convex}>
            {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>;
};

export default ConvexClientProvider;