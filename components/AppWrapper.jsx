"use client";

import { useRouter } from "next/router";
import Layout from "./layout/layout";

export default function AppWrapper({ children }) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return (
      <div className="bg-[#ececec] h-screen">
        {children}
      </div>
    );
  }

  return (
    <Layout>
      {children}
    </Layout>
  );
}