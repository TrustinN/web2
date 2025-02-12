import path from "path";
import { Banner } from "@/components/Banner";
import {
  PageContainer,
  MainContainer,
  SectionContainer,
  Section,
  Article,
} from "@/components/ContentContainer";
import type { articleElem } from "@/components/ContentContainer";

const base = "/projects";
const pageContent: articleElem[] = [
  {
    id: "RRT-Path-Planning",
    content: (
      <div>
        <p>Building an interactive solver for 2D and 3D environments.</p>
      </div>
    ),
    link: path.join(base, "RRT"),
  },
  {
    id: "Computer Vision/Image Processing",
    content: (
      <div>
        <p>
          Exploring methods in applying various transformations to images to
          produce mosaics, morphs, and more.
        </p>
      </div>
    ),
    link: path.join(base, "ImageProcessing"),
  },
  {
    id: "Computer Graphics",
    content: (
      <div>
        <p>Exploring textures/rendering/animation.</p>
      </div>
    ),

    link: path.join(base, "ComputerGraphics"),
  },
  {
    id: "Spatial Indexing",
    content: (
      <div>
        <p>
          Building a data structure for fast and efficient queries on spatial
          data.
        </p>
      </div>
    ),
    link: path.join(base, "SpatialIndexing"),
  },
  {
    id: "Surface Reconstruction",
    content: (
      <div>
        <p>Regenerating meshes from point clouds.</p>
      </div>
    ),
    link: path.join(base, "SurfaceReconstruction"),
  },
];

export default async function Page() {
  return (
    <div>
      <Banner>
        <h1> Projects </h1>
      </Banner>

      <PageContainer>
        <MainContainer>
          <SectionContainer>
            {pageContent.map((article) => (
              <Section key={article.id}>
                <Article id={article.id} link={article.link} className="p-0">
                  <div className="rounded-t-2xl bg-red-50 min-h-12 w-full h-1/2  flex items-center justify-center">
                    <h2>{article.id}</h2>
                  </div>
                  <div className="px-8">{article.content}</div>
                </Article>
              </Section>
            ))}
          </SectionContainer>
        </MainContainer>
      </PageContainer>
    </div>
  );
}
