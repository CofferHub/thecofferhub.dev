import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="about"
    title="Descrição do Projeto"
    description="O Coffer é um projeto de comunidade open-source com a propostar de ser um ambiente para compartilhamento de conhecimento. Inspirado em comunidades como Heart Developers e conceitos como grupos MasterMind, que buscam ser um ambiente para troca de experiências entre pessoas de diversas áreas de atuação."
  >
    <VerticalFeatureRow
      title="Propósito e Público Alvo"
      description="A proposta da comunidade no discord e github, e permitir que desenvolvedores(as), estudantes, professores(as) de universidade, amantes de tecnologia possam ter um ambiente para troca de conhecimento e também para realização de projetos, ferramentas e aplicações com foco na comunidade."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
      id="purpuse"
    />
    <VerticalFeatureRow
      title="Projetos e ferramentas"
      description="Buscamos permitir que pessoas de qualquer nível de experiência interajam entre si, garantindo que possamos criar um ambiente próspero para novas ferramentas e projetos que serão usados pela comunidade em geral."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
      id="projects"
    />
    <VerticalFeatureRow
      title="Meetups e Eventos"
      description="Acreditamos que conhecimento deve sempre ser compartilhado, por isso, sempre incentivamos nossos membros a debater sobre tecnologia, computação e afins. Garantindo um ambiente colaborativo para todos(as)."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
