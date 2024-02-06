import { Head, asset } from "$fresh/runtime.ts";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function SharedHead(props: any) {
  return (
    <>
      <Head>
        <title>
          {props.title} | Centro de Reflexoterapia Hermanas de San Pablo de
          Chartres
        </title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://reflexoperu.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Centro de Reflexoterapia Hermanas de San Pablo de Chartres    "
        />
        <meta
          property="og:description"
          content="Somos pioneros y el principal Centro de enseñanza de la Reflexología en el Perú, la aplicamos como terapia natural bajo un enfoque holístico, pues ésta ha demostrado ampliamente su eficacia en mejorar la calidad de vida de la población, ayudando al reestablecimiento del equilibrio energético de las personas, mediante el estímulo manual de las áreas reflejas de los pies, facilitando un proceso de autorregulación del organismo, ya que los pies representan el estado físico, emocional y energético de las personas."
        />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/reflexoperu/image/upload/v1534438193/39298725_1930781226943142_5271747407204319232_n.jpg"
        />

        <link
          href={asset("/plugins/jquery-ui/jquery-ui.css")}
          rel="stylesheet"
        />
        <link
          href={asset("/plugins/bootstrap/css/bootstrap.min.css")}
          rel="stylesheet"
        />
        <link
          href={asset("/plugins/font-awesome/css/font-awesome.min.css")}
          rel="stylesheet"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={asset("/plugins/rs-plugin/css/settings.css")}
          media="screen"
        />
        <link
          rel="stylesheet"
          href={asset("/plugins/selectbox/select_option1.css")}
        />
        <link
          rel="stylesheet"
          href={asset("/plugins/owl-carousel/owl.carousel.css")}
          media="screen"
        />
        <link
          rel="stylesheet"
          href={asset("/plugins/isotope/jquery.fancybox.css")}
        />
        <link rel="stylesheet" href={asset("/plugins/isotope/isotope.css")} />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,300,600,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href={asset("/css/style.css")} rel="stylesheet" />
        <link
          id="option_color"
          rel="stylesheet"
          href={asset("/css/default.css")}
        />

        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
        />
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      </Head>

      <body>
        <div id="fb-root"></div>
        <script
          async
          defer
          src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&amp;version=v3.2&amp;appId=2116788338612176&amp;autoLogAppEvents=1"
        ></script>

        <div class="main-wrapper">
          <Header />

          {props.children}

          <Footer />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script
          src="https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"
          integrity="sha256-4JY5MVcEmAVSuS6q4h9mrwCm6KNx91f3awsSQgwu0qc="
        ></script>
        <script src={asset("/plugins/bootstrap/js/bootstrap.min.js")}></script>
        <script
          src={asset("/plugins/rs-plugin/js/jquery.themepunch.tools.min.js")}
        ></script>
        <script
          src={asset(
            "/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"
          )}
        ></script>
        <script
          src={asset("/plugins/selectbox/jquery.selectbox-0.1.3.min.js")}
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        ></script>
        <script src={asset("/plugins/owl-carousel/owl.carousel.js")}></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
        <script
          src={asset("/plugins/counter-up/jquery.counterup.min.js")}
        ></script>
        <script src={asset("/plugins/isotope/isotope.min.js")}></script>
        <script
          src={asset("/plugins/isotope/jquery.fancybox.pack.js")}
        ></script>
        <script src={asset("/plugins/isotope/isotope-triger.js")}></script>
        <script src={asset("/plugins/countdown/jquery.syotimer.js")}></script>
        <script src={asset("/plugins/velocity/velocity.min.js")}></script>
        <script src={asset("/plugins/smoothscroll/SmoothScroll.js")}></script>
        <script
          src={asset("/plugins/google-custom-map/google-map.js")}
        ></script>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBksTVlQo0GmxuUYsBYV0RHSElHWIZk0ZA&amp;callback=initMap"
        ></script>
        <script src="/js/custom.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-135483764-1"
        ></script>
      </body>
    </>
  );
}
