"use client";

import { createContext, useContext, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "./dict";

const LangContext = createContext<Lang>("tr");

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** Mevcut dili döndürür ("tr" | "en"). */
export function useLang(): Lang {
  return useContext(LangContext);
}

/** Mevcut dile ait sözlük dalını döndürür. */
export function useT(): Dict {
  return dict[useContext(LangContext)];
}
