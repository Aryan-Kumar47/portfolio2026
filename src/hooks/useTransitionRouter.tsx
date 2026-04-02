"use client";

import { useRouter } from "next/navigation";
import { pageTransitionIn } from "../utlis/pageTransition";

export function useTransitionRouter() {
  const router = useRouter();

  const pushWithTransition = (href: string) => {
    router.prefetch(href);
    // router.push(href);
    const tl = pageTransitionIn();
    tl.eventCallback("onComplete", () => {
      router.push(href);
    });
  };

  return { pushWithTransition };
}
