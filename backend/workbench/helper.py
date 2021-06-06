def parse_arrangement(row_size, col_size, raw_arrangement):
    arrangement = [['_' for __ in range(col_size)] for _ in range(row_size)]
    for key in raw_arrangement:
        row, col = key.split('|')
        arrangement[int(row)][int(col)] = raw_arrangement[key]
    return arrangement


def generate_message(matched_recipes):
    if matched_recipes == 0:
        return "Failed to craft item. Workbench arrangement doesn't match any recipe.", 'FAILED'
    if matched_recipes > 1:
        return "Failed to craft item. Workbench arrangement matches multiple recipes.", 'FAILED'
    return "An item is successfully crafted!", 'SUCCESS'


def count_submatrix(matrix, submatrix):
    count = 0
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if __bfs_check__(submatrix, matrix, row, col):
                count += 1
    return count

def __bfs_check__(submatrix, matrix, i_row, i_col):
  visited = set()
  queue = [(0, 0, i_row, i_col)]
  while queue:
    subrow, subcol, row, col = queue.pop(0)
    if (subrow, subcol) in visited:
      continue
    visited.add((subrow, subcol))
    if subrow < 0 or subrow >= len(submatrix) or subcol < 0 or subcol >= len(submatrix[0]):
      if row < 0 or row >= len(matrix) or col < 0 or col >= len(matrix[0]) or matrix[row][col] == '_':
        continue
      return False
    if row < 0 or row >= len(matrix) or col < 0 or col >= len(matrix[0]):
      return False
    if submatrix[subrow][subcol] != matrix[row][col]:
      return False
    queue.append((subrow - 1, subcol, row - 1, col))
    queue.append((subrow + 1, subcol, row + 1, col))
    queue.append((subrow, subcol + 1, row, col + 1))
    queue.append((subrow, subcol - 1, row, col - 1))
    queue.append((subrow + 1, subcol - 1, row + 1, col - 1))
    queue.append((subrow + 1, subcol + 1, row + 1, col + 1))
    queue.append((subrow - 1, subcol - 1, row - 1, col - 1))
    queue.append((subrow - 1, subcol + 1, row - 1, col + 1))
  return True