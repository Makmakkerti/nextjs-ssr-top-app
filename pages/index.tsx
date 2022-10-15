import { Htag, Button } from '../components';

export default function Home() {
  return (
    <>
      <Htag tag="h1">Hello!</Htag>
      <Button appearance='primary'>Submit</Button>
      <Button appearance='ghost'>Submit</Button>
    </>
  );
}
