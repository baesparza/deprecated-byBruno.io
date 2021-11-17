export namespace ProjectModel {
    export interface File {
        url: string;
        expiry_time: Date;
    }

    export interface Cover {
        type: string;
        file: File;
    }

    export interface Parent {
        type: string;
        database_id: string;
    }

    export interface Publish {
        id: string;
        type: string;
        checkbox: boolean;
    }

    export interface ViewUrl {
        id: string;
        type: string;
        url?: any;
    }

    export interface Relation {
        id: string;
    }

    export interface Technologies {
        id: string;
        type: string;
        relation: Relation[];
    }

    export interface Date {
        id: string;
        type: string;
        last_edited_time: Date;
    }

    export interface Text {
        content: string;
        link?: any;
    }

    export interface Annotations {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    }

    export interface Title2 {
        type: string;
        text: Text;
        annotations: Annotations;
        plain_text: string;
        href?: any;
    }

    export interface Title {
        id: string;
        type: string;
        title: Title2[];
    }

    export interface Properties {
        publish: Publish;
        viewUrl: ViewUrl;
        technologies: Technologies;
        date: Date;
        title: Title;
    }

    export interface Project {
        object: string;
        id: string;
        created_time: Date;
        last_edited_time: Date;
        cover?: Cover;
        icon?: any;
        parent: Parent;
        archived: boolean;
        properties: Properties;
        url: string;
    }
}