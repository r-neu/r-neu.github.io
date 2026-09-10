import Image from 'next/image';

type ProjectArtifactProps = {
  kind: 'integration' | 'inbound' | 'shopping';
};

const artifacts = {
  integration: {
    src: '/projects/integration-ops.png',
    alt: 'Integration Ops incident queue showing active recovery work and ownership',
    caption: 'Incident queue',
    width: 2560,
    height: 1440,
  },
  inbound: {
    src: '/projects/inbound-response-desk.png',
    alt: 'Inbound Response Desk showing a website inquiry, priority, reply target, and editable draft',
    caption: 'Website inquiry',
    width: 2560,
    height: 1440,
  },
  shopping: {
    src: '/projects/shopping-assistant-screen.svg',
    alt: 'Shopping Assistant chat returning paint sets under $300 from the demo catalog',
    caption: 'Catalog search',
    width: 1206,
    height: 2622,
  },
} as const;

export function ProjectArtifact({ kind }: ProjectArtifactProps) {
  const artifact = artifacts[kind];
  const image = (
    <Image
      className="artifact-image"
      src={artifact.src}
      alt={artifact.alt}
      width={artifact.width}
      height={artifact.height}
      sizes="(max-width: 980px) 100vw, 58vw"
      loading={kind === 'shopping' ? 'eager' : undefined}
    />
  );

  return (
    <figure className={`artifact screenshot-artifact ${kind}-artifact`}>
      <div className="artifact-image-wrap">
        {kind === 'shopping' ? (
          <div className="iphone-mockup">
            <div className="iphone-screen">{image}</div>
            <Image
              className="iphone-bezel"
              src="/projects/iphone-16-pro-natural-titanium.png"
              alt=""
              width={1406}
              height={2822}
              aria-hidden="true"
              loading="eager"
            />
          </div>
        ) : image}
      </div>
      <figcaption className="artifact-caption">{artifact.caption}</figcaption>
    </figure>
  );
}
