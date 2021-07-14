import Button from "../../ui/button";
import classes from "./mailing-list.module.css";

function MailingList() {
  return (
    <section className={classes.mailingList}>
      <div className={classes.content}>
        <h1>Never miss a drop.</h1>
        <p>Receive updates about new products and promotions.</p>
        <Button type="light" label="JOIN MAILING LIST" />
      </div>
    </section>
  );
}

export default MailingList;
