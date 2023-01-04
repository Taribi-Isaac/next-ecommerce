import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'pj6ed3ni',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skdNVoSxMwmBBL2rNj8VvwZRdEY9zU3oOz4rB86sZ1SYqkO8hwAsNMJEnckrXCOrvEQJk6auR2C5KN9WbOQ0p0gwGzAiqN9jrory4NL4RRpjxq9Jq5O7XFTDaK0RE7EQpe30FbvudrXwWvCmiLSgcqGubQ9y9yJvk3a9OenpiuUZC5AIAbNg',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);