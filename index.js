module.exports = {
    ra: {
        action: {
            delete: 'Verwijderen',
            show: 'Toon',
            list: 'Lijst',
            save: 'Opslaan',
            create: 'Toevoegen',
            edit: 'Bewerk',
            sort: 'Sorteer',
            cancel: 'Annuleer',
            undo: 'Ongedaan maken',
            refresh: 'Ververs',
            add: 'Voeg toe',
            remove: 'Verwijder',
            add_filter: 'Voeg filter toe',
            remove_filter: 'Verwijder dit filter',
            back: 'Ga terug',
            bulk_actions: '%{smart_count} geselecteerd',
        },
        boolean: {
            true: 'Ja',
            false: 'Nee',
        },
        page: {
            list: '%{name}lijst',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} toevoegen',
            delete: '%{name} #%{id} verwijderen',
            dashboard: 'Dashboard',
            not_found: 'Niet gevonden',
            loading: 'Aan het laden',
        },
        input: {
          file: {
              upload_several:
                  'Drag en drop bestanden om te uploaden, of klik om bestanden te selecteren.',
              upload_single:
                  'Drag en drop een bestand om te uploaden, of klik om een bestand te selecteren.',
          },
          image: {
              upload_several:
                  'Drag en drop afbeeldingen om te uploaden, of klik om bestanden te selecteren.',
              upload_single:
                  'Drag en drop een afbeelding om te uploaden, of klik om een bestand te selecteren.',
          },
          references: {
              all_missing:
                  'De gerefereerde elementen konden niet gevonden worden.',
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
          loading: 'De pagina is aan het laden, een moment a.u.b.',
          invalid_form: 'Het formulier is ongeldig. Controleer a.u.b. de foutmeldingen',
          delete_title: '%{name} #%{id} verwijderen',
          delete_content: 'Weet u zeker dat u dit item wilt verwijderen?',
          bulk_delete_title:
              'Verwijder %{name} |||| Verwijder %{smart_count} %{name} items',
          bulk_delete_content:
              'Weet u zeker dat u dit %{name} item wilt verwijderen? |||| Weet u zeker dat u deze %{smart_count} items wilt verwijderen?',
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
            updated: 'Element bijgewerkt |||| %{smart_count} elementen bijgewerkt',
            created: 'Element toegevoegd',
            deleted: 'Element verwijderd |||| %{smart_count} elementen verwijderd',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Element bestaat niet',
            http_error: 'Server communicatie fout',
            canceled: 'Actie geannuleerd',
        },
        validation: {
            required: 'Verplicht',
            minLength: 'Moet minimaal %{min} karakters bevatten',
            maxLength: 'Mag hooguit %{max} karakters bevatten',
            minValue: 'Moet groter of gelijk zijn aan %{min}',
            maxValue: 'Moet kleiner of gelijk zijn aan %{max}',
            number: 'Moet een getal zijn',
            email: 'Moet een geldig e-mailadres zijn',
            oneOf: 'Moet een zijn van: %{options}',
            regex: 'Moet overeenkomen met een specifiek format (regexp): %{pattern}',
        },
    },
};
