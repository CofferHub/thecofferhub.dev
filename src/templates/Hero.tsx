import React from 'react';

import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/CofferHub">
            <a target="_blank" rel="noopener">
              <FaGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://discord.gg/Fzk2PBB">
            <a target="_blank" rel="noopener">
              <FaDiscord />
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            <span className="text-primary-500 uppercase">{'THE COFFER HUB\n'}</span>
            {'TECNOLOGIA, EDUCAÇÃO E COMUNIDADE\n'}
          </>
        )}
        description="Uma grupo mastermind de desenvolvedores(as) em busca de colaboração para construir ferramentas e aplicações."
        button={(
          <>
            <Link href="https://discord.gg/Fzk2PBB">
              <a target="_blank" rel="noopener">
                <Button xl>SEJA MEMBRO</Button>
              </a>
            </Link>
            <Link href="https://github.com/CofferHub">
              <a target="_blank" rel="noopener" style={{ marginLeft: 10 }}>
                <Button xl>CONTRIBUA</Button>
              </a>
            </Link>
          </>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
