import mailChannelsPlugin, { Submission } from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
    personalizations: (sub: Submission) => [
        {
            to: [
                {
                    name: 'there',
                    email: sub.formData.get("email")?.toString()!,
                }
            ]
        }],
    from: {
        name: "ACME Support",
        email: "support@example.com",
    },
    respondWith: () => {
        return new Response(
            `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
        );
    },
});