interface IFormatedTitle {
  main: string
  tail: string
}

export const FormatTitle = (title: string): IFormatedTitle => {
  const titleWords = title.split(" ")

  switch (true) {
    case titleWords.length <= 2: {
      return {
        main: titleWords.join(" "),
        tail: "",
      }
    }

    case titleWords.length <= 3: {
      const tailLength = 1
      return {
        main: titleWords.slice(0, -tailLength).join(" "),
        tail: " " + titleWords.slice(titleWords.length - tailLength).join(" "),
      }
    }

    default: {
      const tailLength = 2
      return {
        main: titleWords.slice(0, -tailLength).join(" "),
        tail: " " + titleWords.slice(titleWords.length - tailLength).join(" "),
      }
    }
  }
}
