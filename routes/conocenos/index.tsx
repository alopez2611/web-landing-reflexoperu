import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import TopsCards from "../../components/TopCards.tsx";
import Main from "../../components/knowus/Main.tsx";

export default function Knowus() {
  const breadcrumb = {
    enable: false,
  };

  const title = "Conócenos";

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name="Conócenos" breadcrumb={breadcrumb} />
      <Main />
    </Layout>
  );
}
