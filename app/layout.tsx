import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡尾巴宠物洗护店",
  description: "泡泡尾巴宠物洗护店，提供宠物洗澡、美容修剪、精致护理与会员服务。",
  openGraph: {
    title: "泡泡尾巴宠物洗护店",
    description: "为猫咪和狗狗提供安心洗澡、造型修剪、皮毛养护与气味管理服务。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
