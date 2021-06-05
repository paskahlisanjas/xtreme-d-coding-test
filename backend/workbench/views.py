from rest_framework.decorators import api_view
from rest_framework.response import Response

from workbench.helper import parse_arrangement

@api_view(['POST'])
def craft_item(request):
    rowSize = request.data['rowSize']
    colSize = request.data['columnSize']
    raw_arrangement = request.data['arrangement']

    arrangement = parse_arrangement(rowSize, colSize, raw_arrangement)

    return Response({
        'result': arrangement,
        'message': 'Dummy API'
    })