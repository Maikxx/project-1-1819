import { Loader } from '../components/Core/Feedback/Loader'
import { Component } from './Component'
import { Validator } from './Validator'

export const ALLOWED_TAGS_PER_ATTRIBUTE = [
    { attr: 'accept', tags: [ 'form', 'input' ] },
    { attr: 'accept-charset', tags: ['form'] },
    { attr: 'accesskey', tags: '*' },
    { attr: 'action', tags: ['form'] },
    { attr: 'align', tags: [ 'applet', 'caption', 'col', 'colgroup', 'hr', 'iframe', 'img', 'table', 'tbody', 'td', 'tfoot' , 'th', 'thead', 'tr' ] },
    { attr: 'allow', tags: ['iframe'] },
    { attr: 'alt', tags: [ 'applet', 'area', 'img', 'input' ] },
    { attr: 'async', tags: ['script'] },
    { attr: 'autocapitalize', tags: '*' },
    { attr: 'autocomplete', tags: [ 'form', 'input', 'textarea' ] },
    { attr: 'autofocus', tags: [ 'button', 'input', 'keygen', 'select', 'textarea' ] },
    { attr: 'autoplay', tags: [ 'audio', 'video' ] },
    { attr: 'buffered', tags: [ 'audio', 'video' ] },
    { attr: 'challenge', tags: ['keygen'] },
    { attr: 'charset', tags: [ 'meta', 'script' ] },
    { attr: 'checked', tags: [ 'command', 'input' ] },
    { attr: 'cite', tags: [ 'blockquote', 'del', 'ins', 'q' ] },
    { attr: 'class', tags: '*' },
    { attr: 'code', tags: ['applet'] },
    { attr: 'codebase', tags: ['applet'] },
    { attr: 'cols', tags: ['textarea'] },
    { attr: 'colspan', tags: [ 'td', 'th' ] },
    { attr: 'content', tags: ['meta'] },
    { attr: 'contenteditable', tags: '*' },
    { attr: 'contextmenu', tags: '*' },
    { attr: 'controls', tags: [ 'audio', 'video' ] },
    { attr: 'coords', tags: ['area'] },
    { attr: 'crossorigin', tags: [ 'audio', 'img', 'link', 'script', 'video' ] },
    { attr: 'csp', tags: ['iframe'] },
    { attr: 'data', tags: '*' },
    { attr: 'datetime', tags: [ 'del', 'ins', 'time' ] },
    { attr: 'decoding', tags: ['img'] },
    { attr: 'default', tags: ['track'] },
    { attr: 'defer', tags: ['script'] },
    { attr: 'dir', tags: '*' },
    { attr: 'dirname', tags: [ 'input', 'textarea' ] },
    { attr: 'disabled', tags: [ 'button', 'command', 'fieldset', 'input', 'keygen', 'optgroup', 'option', 'select', 'textarea' ] },
    { attr: 'download', tags: [ 'a', 'area' ] },
    { attr: 'draggable', tags: '*' },
    { attr: 'dropzone', tags: '*' },
    { attr: 'enctype', tags: ['form'] },
    { attr: 'for', tags: [ 'label', 'output' ] },
    { attr: 'form', tags: [ 'button', 'fieldset', 'input', 'keygen', 'label', 'meter', 'object', 'output', 'progress', 'select', 'textarea' ] },
    { attr: 'formaction', tags: [ 'input', 'button' ] },
    { attr: 'headers', tags: [ 'td', 'th' ] },
    { attr: 'hidden', tags: '*' },
    { attr: 'high', tags: ['meter'] },
    { attr: 'href', tags: [ 'a', 'area', 'base', 'link' ] },
    { attr: 'hreflang', tags: [ 'a', 'area', 'link' ] },
    { attr: 'http-equiv', tags: ['meta'] },
    { attr: 'icon', tags: ['command'] },
    { attr: 'id', tags: '*' },
    { attr: 'importance', tags: [ 'iframe', 'img', 'link', 'script' ] },
    { attr: 'integrity', tags: [ 'link', 'script' ] },
    { attr: 'ismap', tags: ['img'] },
    { attr: 'itemprop', tags: '*' },
    { attr: 'keytype', tags: ['keygen'] },
    { attr: 'kind', tags: ['track'] },
    { attr: 'label', tags: ['track'] },
    { attr: 'lang', tags: '*' },
    { attr: 'language', tags: ['script'] },
    { attr: 'list', tags: ['input'] },
    { attr: 'loop', tags: [ 'audio', 'bgsound', 'marquee', 'video' ] },
    { attr: 'low', tags: ['meter'] },
    { attr: 'manifest', tags: ['html'] },
    { attr: 'max', tags: [ 'input', 'meter', 'progress' ] },
    { attr: 'maxlength', tags: [ 'input', 'textarea' ] },
    { attr: 'minlength', tags: [ 'input', 'textarea' ] },
    { attr: 'media', tags: [ 'a', 'area', 'link', 'source', 'style' ] },
    { attr: 'method', tags: ['form'] },
    { attr: 'min', tags: [ 'input', 'meter' ] },
    { attr: 'multiple', tags: [ 'input', 'select' ] },
    { attr: 'muted', tags: [ 'audio', 'video' ] },
    { attr: 'name', tags: [ 'button', 'form', 'fieldset', 'iframe', 'input', 'keygen', 'object', 'output', 'select', 'textarea', 'map', 'meta', 'param' ] },
    { attr: 'novalidate', tags: ['form'] },
    { attr: 'open', tags: ['details'] },
    { attr: 'optimum', tags: ['meter'] },
    { attr: 'pattern', tags: ['input'] },
    { attr: 'ping', tags: [ 'a', 'area' ] },
    { attr: 'placeholder', tags: [ 'input', 'textarea' ] },
    { attr: 'points', tags: [ 'polygon', 'polyline' ] },
    { attr: 'poster', tags: ['video'] },
    { attr: 'preload', tags: [ 'audio', 'video' ] },
    { attr: 'radiogroup', tags: ['command'] },
    { attr: 'readonly', tags: [ 'input', 'textarea' ] },
    { attr: 'referrerpolicy', tags: [ 'a', 'area', 'iframe', 'img', 'link', 'script' ] },
    { attr: 'rel', tags: [ 'a', 'area', 'link' ] },
    { attr: 'required', tags: [ 'input', 'select', 'textarea' ] },
    { attr: 'reversed', tags: ['ol'] },
    { attr: 'rows', tags: ['textarea'] },
    { attr: 'rowspan', tags: [ 'td', 'th' ] },
    { attr: 'sandbox', tags: ['iframe'] },
    { attr: 'scope', tags: ['th'] },
    { attr: 'scoped', tags: ['style'] },
    { attr: 'selected', tags: ['option'] },
    { attr: 'shape', tags: [ 'a', 'area' ] },
    { attr: 'size', tags: [ 'input', 'select' ] },
    { attr: 'sizes', tags: [ 'link', 'img', 'source' ] },
    { attr: 'slot', tags: '*' },
    { attr: 'span', tags: [ 'col', 'colgroup' ] },
    { attr: 'spellcheck', tags: '*' },
    { attr: 'src', tags: [ 'audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video' ] },
    { attr: 'srcdoc', tags: ['iframe'] },
    { attr: 'srclang', tags: ['track'] },
    { attr: 'srcset', tags: [ 'img', 'source' ] },
    { attr: 'start', tags: ['ol'] },
    { attr: 'step', tags: ['input'] },
    { attr: 'style', tags: '*' },
    { attr: 'summary', tags: ['table'] },
    { attr: 'tabindex', tags: '*' },
    { attr: 'target', tags: [ 'a', 'area', 'base', 'form' ] },
    { attr: 'title', tags: '*' },
    { attr: 'translate', tags: '*' },
    { attr: 'transform', tags: [ 'svg', 'g', 'text', 'path', 'polygon' ] },
    { attr: 'type', tags: [ 'button', 'input', 'command', 'embed', 'object', 'script', 'source', 'style', 'menu' ] },
    { attr: 'usemap', tags: [ 'img', 'input', 'object' ] },
    { attr: 'value', tags: [ 'button', 'option', 'input', 'li', 'meter', 'progress', 'param' ] },
    { attr: 'viewBox', tags: ['svg'] },
    { attr: 'width', tags: [ 'canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video' ] },
    { attr: 'wrap', tags: ['textarea'] },
    { attr: 'xmlns', tags: ['svg'] },
]

export class M {
    public static async render(component: HTMLElement | SVGElement | string | Component<any> | Element, host: HTMLElement | Element | SVGElement) {
        let _node
        if (Validator.isTypeOf(component, 'string')) {
            _node = document.createTextNode(component as string)
        } else if (component instanceof Component) {
            let content
            if (Validator.isPromise(component)) {
                content = await component.render()
            } else {
                content = component.render()
            }

            _node = content
        } else {
            _node = component
        }

        if (!_node) {
            return null
        }

        host.appendChild(_node as Element)

        return host
    }

    public static create(component: string | Function, properties: Object, ...children: any[]) {
        let _node: HTMLElement | SVGElement

        if (Validator.isTypeOf(component, 'function')) {
            _node = (component as any)(properties, children)
        } else {
            if (Validator.isSvgElement(component as string)) {
                _node = document.createElementNS('http://www.w3.org/2000/svg', component as string)
            } else {
                _node = document.createElement(component as string)
            }
        }

        if (properties) {
            Object.entries(properties).forEach(M.parseAttribute(_node))
        }

        if (children && children.length > 0) {
            children.forEach(child => Array.isArray(child)
                ? child.forEach(c => this.render(c, _node))
                : this.render(child, _node)
            )
        }

        return _node
    }

    public static parseAttribute(_node: HTMLElement | SVGElement) {
        return function ([ attribute, attributeValue ]: [string, any]) {
            if (attribute.includes('event:')) {
                const [ , event ] = attribute.split(':')
                _node.addEventListener(event, attributeValue)
            } else if (attribute.includes('className')) {
                _node.setAttribute('class', attributeValue)
            } else {
                M.validateAttribute(attribute, _node.tagName)
                _node.setAttribute(attribute, attributeValue)
            }
        }
    }

    public static resetComponent(component: HTMLElement | Element | SVGElement) {
        component.innerHTML = ''
    }

    public static toggleLoader(host: HTMLElement | SVGElement) {
        const loaderElement = host.querySelector('.Loader')
        if (!loaderElement) {
            M.render(new Loader({}), host)
        } else {
            host.removeChild(loaderElement)
        }
    }

    public static getClassName(baseClassNames: string, className?: string) {
        return (className && className.length > 0)
            ? `${baseClassNames} ${className}`
            : baseClassNames
    }

    public static validateAttribute(attribute: any, tagName: string) {
        const currentAttribute = ALLOWED_TAGS_PER_ATTRIBUTE.find(({ attr }) => {
            return attr === attribute
        })

        if (!currentAttribute) {
            if (!attribute.includes('data')) {
                throw new Error(`
                    You have either passed an invalid property called: ${attribute},${` `}
                    or you have forgotten to handle this custom property.
                `)
            }
        } else if (Array.isArray(currentAttribute.tags) && !currentAttribute.tags.includes(tagName.toLowerCase())) {
            throw new Error(`
                You have passed an invalid property called: ${attribute} to ${tagName}.
            `)
        }
    }
}
