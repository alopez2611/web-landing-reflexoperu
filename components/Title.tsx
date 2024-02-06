interface ITitle {
  name: string;
  breadcrumb: {
    [key: string]: string | boolean;
  };
}

export default function Title(props: ITitle) {
  const { name, breadcrumb } = props;
  const { enable, link, text1, text2 } = breadcrumb;

  const setLink = link as string;

  return (
    <section class="pageTitleSection">
      <div class="container">
        <div class="pageTitleInfo">
          <h2>{name}</h2>
          {enable && (
            <ol
              class="breadcrumb"
              style="margin-bottom: 0px; padding-bottom: 0px; padding-top: 0px"
            >
              <li>
                <a href={setLink}>{text1}</a>
              </li>
              <li class="active">{text2}</li>
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
