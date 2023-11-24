import type { MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Form data-static-form-name="contact">
      <p>
        <label>Email address <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">send</button>
      </p>
    </Form>

  );
}
