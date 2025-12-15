import { pages } from './content.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, ''); // strip trailing slash

    if (path === '/copyright/personal-use') {
      return new Response(pages['personal-use'], {
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }

    if (path === '/copyright') {
      return new Response(pages['copyright'], {
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }

    // Pass through to origin for any other path
    return fetch(request);
  }
};