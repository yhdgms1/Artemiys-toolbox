import type { Component } from "solid-js";
import { For } from "solid-js";
import { Link } from "solid-app-router";
import { main, big_text, text as text_style, card, card__container, card__active } from '../../styles/shared';

const pages = [
  // {
  //   name: "create",
  //   description: "Manually add a friend's profile to the site",
  //   link: "create"
  // },
  {
    name: "create vk",
    description: "Automatically add a friend's profile to the site through his Vkontakte profile",
    link: "create-vk"
  },
  // {
  //   name: "delete",
  //   description: "Delete a friend's profile from the site",
  //   link: "delete"
  // }
] as const;

export default function IulliaOnline(): Component {
  return (
    <>
      <p class={big_text}>Iuliia</p>
      <p class={text_style}>Choose what you want to do</p>
      <div class={main}>
        {pages.map(page => (
          <Link href={`/cheap-sluts/${page.link}`} class={card}>
            <div class={card__container}>
              <h3>{page.name}</h3>
              <p>{page.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
