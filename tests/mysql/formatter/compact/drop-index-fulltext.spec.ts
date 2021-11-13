import { getCompactFormat } from '../../parse-handler';
import { run } from '../../runner';
import createTable from './sql/create-table';

const sql = [createTable, 'DROP INDEX fi_initials ON person ALGORITHM default LOCK none;'];

run(getCompactFormat, {
  'Compact formatter: Should drop a fulltext index.': {
    queries: [sql.join('')],
  },

  'Compact formatter: Should not drop unknown index.': {
    queries: [sql.concat(['DROP INDEX fi_xyzabc ON person;']).join('')],
  },
});
