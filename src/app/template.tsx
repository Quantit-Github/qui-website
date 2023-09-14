"use client";

import Layout from "@/components/Layout";
import { ThemeProvider } from "@quantit/qui-react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
