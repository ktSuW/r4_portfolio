import styles from "./style.module.css";

export default function ContactForm(props) {
  return (
    <form action='' className={styles.contactForm}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' placeholder='Name' required />
      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='email@example.com' required />
      <label htmlFor='text'>Message</label>
      <textarea name='' id='' placeholder='Enter your message'></textarea>
      <input type='submit' value='Submit' className='contactFormBtn' />
    </form>
  );
}
