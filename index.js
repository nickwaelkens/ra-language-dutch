module.exports = {
    aor: {
        action: {
            delete: 'Verwijder',
            show: 'Toon',
            list: 'Lijst',
            save: 'Opslaan',
            create: 'Toevoegen',
            edit: 'Bewerk',
            cancel: 'Annuleer',
            refresh: 'Ververs',
            add_filter: 'Voeg filter toe',
            remove_filter: 'Verwijder dit filter',
            back: 'Ga terug',
        },
        boolean: {
            true: 'Ja',
            false: 'Nee',
        },
        page: {
            list: '%{name} lijst',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} toevoegen',
            delete: '%{name} #%{id} verwijderen',
            dashboard: 'Dashboard',
            not_found: 'Niet gevonden',
        },
        input: {
            autocomplete: {
                none: 'Geen',
            },
            file: {
                upload_several: 'Drag en drop bestanden om te uploaden, of klik om bestanden te selecteren.',
                upload_single: 'Drag en drop een bestand om te uploaden, of klik om een bestand te selecteren.',
            },
            image: {
                upload_several: 'Drag en drop afbeeldingen om te uploaden, of klik om bestanden te selecteren.',
                upload_single: 'Drag en drop een afbeelding om te uploaden, of klik om een bestand te selecteren.',
            },
            references: {
                all_missing: 'De gerefereerde elementen konden niet gevonden worden.',
                many_missing:
                    'Een of meer van de gerefereerde elementen is niet meer beschikbaar.',
                single_missing:
                    'Een van de gerefereerde elementen is niet meer beschikbaar',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nee',
            are_you_sure: 'Weet u het zeker?',
            about: 'Over',
            not_found:
                'U heeft een verkeerde URL ingevoerd of een defecte link aangeklikt.',
        },
        navigation: {
            no_results: 'Geen resultaten gevonden',
            no_more_results:
                'Pagina %{page} ligt buiten het bereik. Probeer de vorige pagina.',
            page_out_of_boundaries: 'Paginanummer %{page} buiten bereik',
            page_out_from_end: 'Laatste pagina',
            page_out_from_begin: 'Eerste pagina',
            page_range_info: '%{offsetBegin}-%{offsetEnd} van %{total}',
            next: 'Volgende',
            prev: 'Vorige',
        },
        auth: {
            username: 'Gebruikersnaam',
            password: 'Wachtwoord',
            sign_in: 'Inloggen',
            sign_in_error: 'Authenticatie mislukt, probeer opnieuw a.u.b.',
            logout: 'Uitloggen',
        },
        notification: {
            updated: 'Element bijgewerkt',
            created: 'Element toegevoegd',
            deleted: 'Element verwijderd',
            item_doesnt_exist: 'Element bestaat niet',
            http_error: 'Server communicatie fout',
            bad_item: 'Incorrect element',
        },
        validation: {
            required: 'Verplicht',
            minLength: 'Moet minimaal %{min} karakters bevatten',
            maxLength: 'Mag hooguit %{max} karakters bevatten',
            minValue: 'Moet groter of gelijk zijn aan %{min}',
            maxValue: 'Moet kleiner of gelijk zijn aan %{max}',
            number: 'Moet een getal zijn',
            email: 'Moet een geldig e-mailadres zijn',
        },
    },
};
