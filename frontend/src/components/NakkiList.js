import { FlatList } from "react-native";

import ItemSeparator from "./ItemSeparator";
import NakkiItem from "./NakkiItem";

const nakit = [
  {
    id: "haravointi",
    task: "Haravointi",
    status: 1,
  },
  {
    id: "hyllyn_jarjestaminen",
    task: "Hyllyn järjestäminen",
    status: 0,
  },
  {
    id: "iltapalan_valmistus",
    task: "Iltapalan valmistus",
    status: 0,
  },
  {
    id: "imurointi",
    task: "Imurointi",
    status: 0,
  },
  {
    id: "kierratys",
    task: "Kierrätys",
    status: 0,
  },
  {
    id: "koiran_ulkoilutus",
    task: "Koiran ulkoilutus",
    status: 0,
  },
  {
    id: "laskut",
    task: "Laskut",
    status: 0,
  },
  {
    id: "lounas",
    task: "Lounas",
    status: 0,
  },
  {
    id: "peilien_kiillotus",
    task: "Peilien kiillotus",
    status: 0,
  },
  {
    id: "portaiden_pyyhinta",
    task: "Portaiden pyyhintä",
    status: 0,
  },
  {
    id: "paivallinen",
    task: "Päivällinen",
    status: 0,
  },
  {
    id: "tasojen_tyhjennys",
    task: "Tasojen tyhjennys",
    status: 0,
  },
  {
    id: "tiskit",
    task: "Tiskit",
    status: 0,
  },
  {
    id: "vaatekaapin_siivous",
    task: "Vaatekaapin siivous",
    status: 0,
  },
  {
    id: "vessan_pesu",
    task: "Vessan pesu",
    status: 0,
  },
  {
    id: "ylakerran_moppaus",
    task: "Yläkerran moppaus",
    status: 0,
  },
];

const NakkiList = () => {
  return (
    <FlatList
      data={nakit}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={NakkiItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NakkiList;
