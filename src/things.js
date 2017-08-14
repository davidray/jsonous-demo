const things = {
  links: [
    {
      href: "/bikes",
      rel: "add",
      method: "POST"
    }
  ],
  payload: [
    {
      payload: {
        owner: "Dwight",
        wheels: 2,
        top_speed: 18,
        color: "Red",
        comfortable: false,
        links: [
          {
            rel: "self",
            href: "/bike/5",
            method: "GET"
          },
          {
            rel: "remove",
            href: "/bike/5",
            method: "DELETE"
          }
        ]
      }
    },
    {
      payload: {
        owner: "Jan",
        wheels: 1,
        top_speed: 6,
        color: "Blue",
        comfortable: true,
        links: [
          {
            rel: "self",
            href: "/bike/6",
            method: "GET"
          },
          {
            rel: "remove",
            href: "/bike/6",
            method: "DELETE"
          }
        ]
      }
    },
    {
      payload: {
        owner: "Michael",
        wheels: 3,
        top_speed: 8,
        color: "Green",
        comfortable: true,
        links: [
          {
            rel: "self",
            href: "/bike/55",
            method: "GET"
          },
          {
            rel: "remove",
            href: "/bike/55",
            method: "DELETE"
          }
        ]
      }
    }
  ]
};

export default things;
