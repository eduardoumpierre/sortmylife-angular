import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './movie';

@Injectable()
export class MoviesService {

    movies: Movie[] = [
        {
            id: 1,
            title: 'Admirável Mundo Novo',
            rating: 5,
            author: 'Aldous Huxley',
            description: 'Admirável Mundo Novo (Brave New World na versão original em língua inglesa) é um romance ' +
            'distópico escrito por Aldous Huxley e publicado em 1932 que narra um hipotético futuro onde as pessoas são ' +
            'pré-condicionadas biologicamente e condicionadas psicologicamente a viverem em harmonia com as leis e regras ' +
            'sociais, dentro de uma sociedade organizada por castas.',
            image: 'https://amnprojeto.files.wordpress.com/2011/11/aldous.jpg',
            year: 1932,
        },
        {
            id: 2,
            title: 'O Mundo de Sofia',
            rating: 5,
            author: 'Jostein Gaarder',
            description: 'O Mundo de Sofia (Sofies verden em norueguês) é um romance escrito por Jostein Gaarder, ' +
            'publicado em 1991. O livro foi escrito originalmente em norueguês, mas já foi traduzido para mais de 60 ' +
            'línguas, teve sua primeira edição em português em 1995, que atualmente encontra-se em sua 32ª reimpressão.',
            image: 'http://statics.livrariacultura.net.br/products/capas_lg/545/64545.jpg',
            year: 1991,
        }
    ];

    constructor(
        private router: Router
    ) { }

    getAll() {
        return this.movies;
    }

    getTotalItems() {
        return this.movies.length;
    }

    getOneById(id: number) {
        for (const i in this.movies) {
            if (this.movies[i].id == id) {
                return this.movies[i];
            }
        }

        this.router.navigate(['inicio']);
    }

    add(movies: Movie) {
        movies.id = this.getTotalItems() + 1;
        this.movies.unshift(movies);
    }

    update(movies: Movie) {
        for (const i in this.movies) {
            if (this.movies[i].id == movies.id) {
                this.movies[i] = movies;
            }
        }
    }

    delete(id: number) {
        for (const i in this.movies) {
            if (this.movies[i].id == id) {
                this.movies.splice(parseInt(i, 0), 1);
            }
        }
    }
}
