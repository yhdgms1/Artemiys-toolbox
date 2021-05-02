import type { Component } from "solid-js";
import { createSignal, Show, createState } from 'solid-js';
import { Link } from 'solid-app-router';
import { big_text, link, text as text_style, textarea, button, input, width_70 } from "../../styles/shared";

export default function CreateVK(){

    const [shortname, setShortname] = createSignal("");
    const [buttonDisabled, setButtonDisabled] = createSignal(true);
    const [state, setState] = createState({
        data: null,
        error: null
    })

    return(
        <>
            <Link class={`${big_text} ${link}`} href="/iuliia">go back</Link>
            <label for="shortname" class={text_style}>ID or shortname of you friend</label>
            <input
                type="text"
                id="shortname"
                name="shortname"
                placeholder="ID or shortname of you friend"
                class={`${input} ${width_70}`}
                spellcheck="false"
                onInput={e => {
                    setShortname(e.target.value);
                    setButtonDisabled(!(shortname() != '' && shortname().length <= 32));
                }}
            />
            <button 
                class={button}
                onClick={async () => {
                    setState("data", null)
                    setState("error", null)
                    if(shortname() != '' && shortname().length <= 32){
                        const res = await fetch('https://cheap-sluts.artemis69.workers.dev/create/vk', {
                            method: 'POST',
                            body: JSON.stringify({
                                id: shortname()
                            })
                        });

                        const status = await res.status;

                        if(status !== 201){
                            const error = await res.text();
                            setState("error", error);
                        }else{
                            const data = await res.json();
                            setState("data", data);
                        }

                        console.log(status);
                    }
                }}
            >
                Create
            </button>
            <Show when={state.data !== null} fallback={<div class={text_style}>Response will be here</div>}>
                <p class={text_style}>Created successfully!</p>
                <a href={`https://cheap-sluts.pages.dev/${state.data?.userid}`} target="_blank"></a>
            </Show>
            <Show when={state.error !== null}>
                <p class={text_style}>Error: {JSON.stringify(state.error)}</p>
            </Show>
        </>
    )
}