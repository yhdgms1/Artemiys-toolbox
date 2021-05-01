import { big_text, link, text as text_style } from "../../styles/text";
import { Link } from 'solid-app-router';
import iuliia from 'iuliia';
import { button } from '../../styles/button';
import { textarea } from '../../styles/textarea';
import { createSignal, Show } from 'solid-js';

export default function Iullia(props){

    let schema;

    try {
        schema = iuliia.Schemas.get(props.params.id)
    } catch{
        schema = '';
    }

    const schemas = iuliia.Schemas.names()

    const [text, setText] = createSignal("");
    const [output, setOutput] = createSignal("");

    return(
        <>
            <Show when={schemas.includes(schema.name)} fallback={<Error/>}>
                <Link class={`${big_text} ${link}`} href="/iuliia">go back</Link>
                <p class={text_style}>Current schema is {schema.name}</p>
                <textarea 
                    class={textarea}
                    spellcheck="false"
                    placeholder="Type the text here"
                    onInput={e => setText(e.target.value)}
                />
                <button 
                    class={button}
                    onClick={() => setOutput(iuliia.translate(text(), schema))}
                >
                    Transliterate!
                </button>
                <textarea 
                    class={textarea}
                    spellcheck="false"
                    readonly
                    placeholder="Transliterated text will be here"
                    value={output()}
                />
            </Show>
        </>
    )
}

function Error(){
    return(
        <>
            <p class={big_text}>Schema does not exists</p>
            <Link class={`${link}`} href="/iuliia">view existing</Link>
        </>
    )
}