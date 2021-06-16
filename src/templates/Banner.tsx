import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Faça networking, Crie ferramentas e compartilhe conhecimento."
      subtitle="Junte-se ao nosso grupo do discord e vamos aprender juntos."
      button={(
        <Link href="https://discord.gg/Fzk2PBB">
          <a>
            <Button>COMEÇE AQUI</Button>
          </a>
        </Link>
      )}
    />
  </Section>
);

export { Banner };
