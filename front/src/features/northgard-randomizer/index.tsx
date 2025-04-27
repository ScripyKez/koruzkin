import { useState } from "react"
import { Clan } from "./components/northgard-clan"
import snakeBanner from "../../assets/images/clans/boar.webp"
import styles from "./_styles.module.css"

const testList = [
  {
    name: "snake",
    img: snakeBanner,
  },
  {
    name: "bear",
    img: snakeBanner,
  },
  {
    name: "stoat",
    img: snakeBanner,
  },
]

interface NorthgardRandomizer {
  clans?: Clan[]
}

export function NorthgardRandomizer() {
  const [list, setList] = useState<Clan[]>(testList)

  if (list.length <= 1) return <div>"Choose more clans"</div>

  return (
    <ul className={styles.root}>
      {list.map(({ name, img }) => (
        <li className={styles.clanCard}>
          <img src={img} alt="" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  )
}
