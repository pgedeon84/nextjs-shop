// import { buildUrl } from "cloudinary-build-url";
import Category from "./category";
import classes from "./categories.module.css";
import kids from "./converseK.jpeg";

function Categories() {
  // const src = buildUrl('ConverseW', {
  //   cloud: {
  //     cloudName: 'pg84'
  //   }
  // })
  return (
    <section className={classes.categories}>
      <Category
        category="Women"
        src="/images/wwconverse.jpg"
        atl="Women's Converse"
        linkPath="/"
      />
      <Category
        category="Men"
        src="/images/mwconverse.jpg"
        atl="Men's Converse"
        linkPath="/"
      />
      <Category category="Kids" src={kids} atl="Men's Converse" linkPath="/" />
    </section>
  );
}

export default Categories;
