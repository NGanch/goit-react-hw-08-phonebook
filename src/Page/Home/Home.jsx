import { Section } from '../../components/App.styled';
import Frame from '../../images/Frame.png';
export function Home() {
  const avatar = Frame;
  return (
    <Section>
      <img src={avatar} width="1200" height="800" alt="Frame" />
    </Section>
  );
}
