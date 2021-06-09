import { Helmet } from "react-helmet";

export default function SEO({
    title, description
}) {
    return <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <noscript>javascript must be enabled</noscript>
        <title>{title}</title>
    </Helmet>
}