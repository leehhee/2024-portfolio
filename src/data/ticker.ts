import PROJECT13 from '/public/icon/ticker/dcco.svg';
import PROJECT12 from '/public/icon/ticker/hanbat.svg';
import PROJECT11 from '/public/icon/ticker/IBM.svg';
import PROJECT07 from '/public/icon/ticker/iworks.svg';
import PROJECT06 from '/public/icon/ticker/pro.svg';
import PROJECT06 from '/public/icon/ticker/Veritas.svg';

export const ticker: Reference =[
    {
        key: 22
        title: 'dcco'
    },
    {
        key: 23
        title: 'hanbat'
    },
    {
        key: 24
        title: 'IBM'
    },
    {
        key: 25
        title: 'iworks'
    },
    {
        key: 26
        title: 'pro'
    },
    {
        key: 27
        title: 'Veritas'
    },

];

export type Reference = IReference[];
export interface IReference {
  key: number;
  title: string;
}
