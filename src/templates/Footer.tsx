import React from 'react';

import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={(
          <>
            <Link href="https://github.com/CofferHub">
              <a target="_blank" rel="noopener">
                <FaGithub />
              </a>
            </Link>

            <Link href="https://discord.gg/Fzk2PBB">
              <a target="_blank" rel="noopener">
                <FaDiscord />
              </a>
            </Link>
          </>
        )}
      >
        <li>
          <Link href="#description">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#description">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="#meetups">
            <a>Meetups</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
