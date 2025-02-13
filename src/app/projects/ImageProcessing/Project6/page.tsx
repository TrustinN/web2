"use client";

import { Banner } from "@/components/Banner";
import {
  PageContainer,
  MainContainer,
  SectionContainer,
  Section,
  Article,
} from "@/components/ContentContainer";
import type { articleElem } from "@/components/ContentContainer";
import { Sidebar } from "@/components/Sidebar";

const pageContent: articleElem[] = [];

export default function Page() {
  return (
    <div>
      <Banner>
        <h1>Project 5: Fun With Diffusion Models!</h1>
      </Banner>

      <PageContainer>
        <MainContainer>
          <SectionContainer>
            {pageContent.map((article) => (
              <Section key={article.id}>
                <Article id={article.id} link={article.link}>
                  {article.content}
                </Article>
              </Section>
            ))}
          </SectionContainer>
          <Sidebar ids={pageContent.map((article) => article.id)} />
        </MainContainer>
      </PageContainer>
    </div>
  );
}
