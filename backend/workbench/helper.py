def parse_arrangement(rowSize, colSize, raw_arrangement):
    arrangement = [['_' for __ in range(colSize)] for _ in range(rowSize)]
    for key in raw_arrangement:
        row, col = key.split('|')
        arrangement[int(row)][int(col)] = raw_arrangement[key]
    return arrangement